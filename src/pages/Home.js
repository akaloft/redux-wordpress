/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { ContactFrom } from '../components/form/contact-form'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { getPosts } from '../actions/postAction'
import { Loading } from '../components/posts/loading'
import List from '../components/posts/list'

function Home() {
    const { data, loading } = useSelector(state => ({
        data: state.posts.data.data,
        loading: state.posts.loading
    }), shallowEqual)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    return (
        <React.Fragment>
            {!loading ? <List data={data} /> : <Loading />}
            <ContactFrom />
        </React.Fragment>
    )
}

export default Home
