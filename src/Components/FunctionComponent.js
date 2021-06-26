import React, { useContext } from 'react';
import { getContext } from 'smart-context';

/**
 * Context available in props
 */
const MyAwesomeComponent = () => {
  const { state: postState, actions: postActions } = useContext(
    getContext('post')
  );

  /** Async action */
  const clickHandlerAsync = () => {
    postActions.setLoading({ loading: true });
    postActions.setPost();
  };

  /** Action with immer js */
  const clickHandlerAddPost = () => {
    postActions.setLoading({ loading: true });
    postActions.addPost();
  };

  const resetHandler = () => {
    // reset action is auto-generated that restores initial state
    postActions.reset();
  };

  return (
    <div className="container">
      <h2>Context2</h2>
      <p>
        Deep state object. Loads list of posts via async action. ImmerJS for
        immutability.
      </p>
      {postState.loading ? (
        <p>Loading...</p>
      ) : (
        postState.post.map((p, i) => <p key={i}>{p}</p>)
      )}
      <button disabled={postState.loading} onClick={clickHandlerAsync}>
        Get posts (Async action)
      </button>
      <button disabled={postState.loading} onClick={clickHandlerAddPost}>
        Add posts (Immer lib)
      </button>
      <button disabled={postState.loading} onClick={resetHandler}>
        Reset
      </button>
    </div>
  );
};

export default MyAwesomeComponent;
