import { render, screen, fireEvent } from '@testing-library/react';
import Post from './Post'; // Import the Post component

// Mock data for testing
const post = {
  username: 'Massive_Mission_6386',
  time: '9h ago',
  body: 'I love my dog, but I’m not bringing that big idiot everywhere with me',
  profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
  comments: [
    {
      username: 'Key_Warthog_1550',
      time: '5h ago',
      body: 'Yeah my dog is wonderful and extremely friendly...',
      profileImage: 'https://randomuser.me/api/portraits/men/2.jpg',
      comments: [
        {
          username: 'User_Reply_123',
          time: '1h ago',
          body: 'I agree! Dogs are the best.',
          profileImage: 'https://randomuser.me/api/portraits/men/3.jpg'
        }
      ]
    }
  ]
};

describe('Post Component', () => {
  test('renders post with username and body', () => {
    render(<Post post={post} />);

    // Check if the username and post body are displayed
    expect(screen.getByText(/Massive_Mission_6386/i)).toBeInTheDocument();
    expect(screen.getByText(/I love my dog, but I’m not bringing that big idiot everywhere with me/i)).toBeInTheDocument();
  });

  test('renders comments correctly', () => {
    render(<Post post={post} />);

    // Check if the comment body is displayed
    expect(screen.getByText(/Yeah my dog is wonderful and extremely friendly.../i)).toBeInTheDocument();
  });

  test('renders reply to a comment', () => {
    render(<Post post={post} />);

    // Check if the reply body is displayed
    expect(screen.getByText(/I agree! Dogs are the best./i)).toBeInTheDocument();
  });

  test('toggles reply visibility when Show Replies is clicked', () => {
    render(<Post post={post} />);

    const showRepliesButton = screen.getByText('+ Show Replies');
    fireEvent.click(showRepliesButton);

    // Check if the text changes to "Hide Replies"
    expect(screen.getByText('− Hide Replies')).toBeInTheDocument();

    // Click again to hide replies
    fireEvent.click(screen.getByText('− Hide Replies'));

    // Check if the button reverts back to "Show Replies"
    expect(screen.getByText('+ Show Replies')).toBeInTheDocument();
  });

  test('renders icons correctly', () => {
    render(<Post post={post} />);

    // Check if upvote, downvote, and other icons are present
    expect(screen.getByRole('button', { name: /upvote/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /downvote/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /reply/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /share/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /award/i })).toBeInTheDocument();
  });
});

