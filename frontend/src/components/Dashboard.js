import React, { useState } from 'react';
import { FaHeart, FaComment, FaPlus } from 'react-icons/fa'; // Import icons
import { Link, useNavigate } from 'react-router-dom'; // For navigation
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS

const DashboardPage = () => {
  const [media, setMedia] = useState(null); // Image or video URL
  const [isLiked, setIsLiked] = useState(false); // Like button state
  const [comment, setComment] = useState(''); // Current comment
  const [comments, setComments] = useState([]); // List of comments

  const navigate = useNavigate(); // Hook for programmatic navigation

  const navigateToCertiHub = () => {
    navigate('/certihub');
  };

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setMedia(fileURL);
    }
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <div
      style={{
        backgroundColor: 'black',
        color: 'white',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      {/* Header */}
      <header className="text-center mb-5 py-5">
        <h1>MR. SMART YOUR BEST FRIEND 😉</h1>
      </header>

      {/* Media and Interaction Section */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card" style={{ backgroundColor: '#333', color: 'white' }}>
            <div className="card-body">
              <h3 className="card-title text-center">Hurrah ! </h3>

              {/* Media Display */}
              <div className="media-container text-center mb-3">
                {media ? (
                  media.endsWith('.mp4') || media.endsWith('.mov') ? (
                    <video width="100%" controls>
                      <source src={media} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={media}
                      alt="Post"
                      className="img-fluid"
                      style={{ maxHeight: '300px', objectFit: 'cover' }}
                    />
                  )
                ) : (
                  <p>No media uploaded yet.</p>
                )}
              </div>

              {/* Like and Upload Section */}
              <div className="d-flex justify-content-center align-items-center mb-3">
                <FaHeart
                  onClick={toggleLike}
                  size={30}
                  color={isLiked ? 'red' : 'white'}
                  style={{ cursor: 'pointer', marginRight: '20px' }}
                />

                <label style={{ cursor: 'pointer' }}>
                  <FaPlus size={30} color="white" />
                  <input
                    type="file"
                    className="form-control-file"
                    onChange={handleMediaChange}
                    accept="image/*,video/*"
                    style={{ display: 'none' }}
                  />
                </label>
              </div>

              {/* Comment Section */}
              <div className="comments-section">
                <form onSubmit={handleCommentSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Add a comment..."
                      value={comment}
                      onChange={handleCommentChange}
                      style={{ backgroundColor: 'black', color: 'white' }}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Comment
                  </button>
                </form>

                <div className="comments mt-3">
                  <h5>Comments</h5>
                  {comments.length > 0 ? (
                    <ul className="list-unstyled">
                      {comments.map((c, index) => (
                        <li key={index} className="border-bottom py-2">
                          <FaComment /> {c}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No comments yet.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with White Background */}
      <footer
        className="text-center py-3"
        style={{
          backgroundColor: 'white',
          color: 'black',
          marginTop: '30px',
          position: 'relative',
          bottom: '0',
          width: '100%',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <img
                src="certihub.png"
                alt="CertiHub Icon"
                style={{
                  width: '60px',
                  height: '60px',
                  margin: '0 18px',
                  cursor: 'pointer',
                }}
                onClick={navigateToCertiHub}
              />
            </div>
            <div className="col">
              <Link to="/page2">
                <img
                  src="dates.png"
                  alt="Dates Icon"
                  style={{
                    width: '60px',
                    height: '60px',
                    margin: '0 18px',
                  }}
                />
              </Link>
            </div>
            <div className="col">
              <Link to="/page3">
                <img
                  src="analysis.png"
                  alt="Analysis Icon"
                  style={{
                    width: '60px',
                    height: '60px',
                    margin: '0 18px',
                  }}
                />
              </Link>
            </div>
            <div className="col">
              <Link to="/page4">
                <img
                  src="goal.png"
                  alt="Goals Icon"
                  style={{
                    width: '60px',
                    height: '60px',
                    margin: '0 18px',
                  }}
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DashboardPage;
