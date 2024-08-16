import React from "react";

class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            text: ""
        };
    }

    componentDidMount() {
        this.display();
    }

    display = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                users: data
            });
        })
        .catch((error) => {
            console.error('Error fetching users:', error);
        });
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value });
    }

    render() {
        const { users, text } = this.state;

        const filteredUser = users.filter((user) => 
            user.name.toLowerCase().includes(text.toLowerCase())
        );

        return (
            <>
                <div>
                    <input 
                        onChange={this.handleChange} 
                        placeholder="Search by name"
                        value={text}
                    />
                </div>
                <div>
                    <h2>
                        {filteredUser.map((item) => (
                            <div key={item.id}>{item.name}</div>
                        ))}
                    </h2>
                </div>
            </>
        );
    }
}

export default Users;