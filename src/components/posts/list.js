import React from 'react'
import renderHTML from 'react-render-html'
import { Link } from 'react-router-dom'

function List({ data, single }) {
    return (
        <React.Fragment>
            {data.map(item =>
                <article className={`post ${item.x_featured_media && 'post-image-card'}`} key={item.id}>
                    <div className="post-image">
                        {item.x_featured_media && <img src={item.x_featured_media_original} alt={item.title.rendered} className="img-fluid" />}
                    </div>
                    <div className="post-content">
                        <h2 className="post-title">
                            {single ?
                                <Link to={item.slug}>
                                    {item.title.rendered}
                                </Link> : item.title.rendered}
                        </h2>
                        {single ?
                            renderHTML(item.content.rendered)
                            : renderHTML(item.excerpt.rendered)
                        }
                    </div>
                </article>
            )}
        </React.Fragment>
    )
}

export default List
