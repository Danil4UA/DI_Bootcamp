import { db } from "../config/db";
import OpenAI from 'openai';

interface PostInfo {
    content: string,
    userid: number
}
export const postModels = {
    createPost: async(postInfo: PostInfo) => {
        const trx = await db.transaction();
        try {
            const client = new OpenAI({
                apiKey: process.env.OPENAI_API_KEY
            });

            const params: OpenAI.Chat.ChatCompletionCreateParams = {
                messages: [{ role: 'user', content: postInfo.content }],
                model: 'gpt-3.5-turbo',
            };

            const response: OpenAI.Chat.ChatCompletion = await client.chat.completions.create(params);
            const gptResponseText = response.choices[0].message.content;
            const [post] = await trx('posts').insert({
                content: gptResponseText, 
                created_at: new Date(),
                user_id: postInfo.userid
            }).returning('*');

            await trx.commit(); 
            return post

        } catch (error) {
            await trx.rollback()
            console.log(error)
            throw error
        }
    }
}