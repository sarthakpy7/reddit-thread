import React from 'react';
import Post from './components/Post';

const App = () => {
  const posts = [
    {
      username: 'Massive_Mission_6386',
      time: '9h ago',
      profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
      body: 'I love my dog, but I’m not bringing that big idiot everywhere with me',
      comments: [
        {
          username: 'Key_Warthog_1550',
          time: '5h ago',
          profileImage: 'https://randomuser.me/api/portraits/men/2.jpg',
          body: 'Yeah my dog is wonderful and extremely friendly...',
          comments: [
            {
              username: 'Reply_1',
              time: '2h ago',
              body: 'That’s really cool! My dog is also friendly.',
            }
          ]
        }
      ]
    }
  ];

  return (
    <div>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default App;
