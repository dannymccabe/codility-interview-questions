import React from 'react'

const LikeDislike = () => {
    // states
    const [like, setLike] = React.useState(100);
    const [dislike, setDislike] = React.useState(4);
    const [likeActive, setLikeActive] = React.useState(false);
    const [disLikeActive, setDislikeActive] = React.useState(false);

    function liked(){
        if(likeActive){
            setLikeActive(false)
            setLike(like-1)
        }else{
            setLikeActive(true)
            setLike(like+1)
            if(disLikeActive){
                setDislikeActive(false)
                setLike(like+1)
                setDislike(dislike-1)
            }
        }
    }

    function disliked(){
        if(disLikeActive){
            setDislikeActive(false)
            setDislike(dislike-1)
        }else{
            setDislikeActive(true)
            setDislike(dislike+1)
            if(likeActive){
                setLikeActive(false)
                setDislike(dislike+1)
                setLike(like-1)
            }
        }
    }
  return (
    <div>
        <div></div>
        <button onClick={liked} className={[likeActive ? 'active-like': null, 'button'].join(' ')}>Like | {like}</button>
        <button onClick={disliked} className={[disLikeActive ? 'active-dislike': null, 'button'].join(' ')}>Dislike | {dislike}</button>
    </div>
  )
}

export default LikeDislike