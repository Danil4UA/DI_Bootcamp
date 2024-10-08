import { db } from "../config/db";
import OpenAI from 'openai';

interface Content {
    language: string; 
    request: string; 
    size: "small" | "medium" | "large"; 
    emojis: boolean; 
    style: string; 
    audience: string;
}

interface PostInfo {
    content: Content,
    userid: number
}
export const postModels = {
    createPost: async(postInfo: PostInfo) => {
    function convertPostToSentence(content: Content): string {
        const emojiText = content.emojis ? "with emojis" : "without emojis";

        const parts = [
            `Create a ${content.size} post for "${content.request}"`,
            `in ${content.language} language`,
            `in a ${content.style} style`,
            `targeting ${content.audience}`,
            emojiText
        ];
        return parts.join(', ') + '.';
}
        const createContent = convertPostToSentence(postInfo.content)

        const trx = await db.transaction();
        try {
            const client = new OpenAI({
                apiKey: process.env.OPENAI_API_KEY
            });

            
            const params: OpenAI.Chat.ChatCompletionCreateParams = {
                messages: [{ role: 'user', content: createContent}],
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
    },

    getAllPosts: async ()=>{
        try {
            return await db("posts")
                .select("id","user_id", "content", "status",)
        } catch (error) {

            console.log(error)
            throw error
        }
    },

    getPostById: async (id: string) => {
        try {
            return await db("posts")
                .select("id","user_id", "content", "status")
                .where({"id": id})
            
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}