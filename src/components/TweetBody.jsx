import React from 'react'
import ProfilePic from "../image/copy-link-user-avatar-1.png"
import Comment from "../image/comment.svg"
import Retweet from "../image/group-26840.svg"
import Like from "../image/heart.svg"
import Reach from "../image/reach-sv.svg"
import Share from "../image/vector.svg"
import PropTypes from 'prop-types'
import InputField from './inputField'

export function TweetBody({
    name = "Name",
    handle = "@handle",
    tweet = "Writing gets easier after the first sentence. Don't wish for it, work for it.",
    commentCount = 11,
    retweetCount = 270,
    likeCount = 1869,
    reachCount = "99.6K",
    time = "10h",
    }) 
{
    return (
        <section className="mb-5 w-full pt-5 flex items-start p-tweet-component-frame gap-4 border-b border-neutral-700">
            <div className="flex flex-row">
                <img src={ProfilePic} className="w-12 h-12 shrink-0 rounded" />
                <div className=" flex flex-col ml-4 text-neutral-50 font-inter text-base">
                    {/* top bar(name, user handle) */}
                    <div>
                        <span className="font-medium">{name}</span>
                        <span className="text-neutral-500 font-normal">{handle}{time}</span>
                    </div>
                    {/* tweet */}
                    <p className="self-stretch">{tweet}
                    </p>
                    {/* user action */}
                    <div className="flex content-between items-center py-3 self-stretch text-neutral-500">
                        <div className="flex gap-1 mr-auto">
                            <img src={Comment} className />
                            <span>{commentCount}</span>
                        </div>
                        <div className="flex gap-1 mr-auto">
                            <img src={Retweet} className />
                            <span>{retweetCount}</span>
                        </div>
                        <div className="flex gap-1 mr-auto">
                            <img src={Like} className />
                            <span>{likeCount}</span>
                        </div>
                        <div className="flex gap-1 mr-auto">
                            <img src={Reach} className />
                            <span>{reachCount}</span>
                        </div>
                        <div className="flex gap-1 ">
                            <img src={Share} className />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
InputField.propTypes = {
    name : PropTypes.string,
    handle : PropTypes.string,
    tweet : PropTypes.string,
    commentCount : PropTypes.number,
    retweetCount : PropTypes.number,
    likeCount : PropTypes.number,
    reachCount : PropTypes.string,
    verified : PropTypes.bool,
    time : PropTypes.string,
    tweetImage : PropTypes.string,
}

export default TweetBody