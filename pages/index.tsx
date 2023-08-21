import Head from 'next/head'
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import styles from '../styles/Home.module.css'
import {getUsersData} from "../src/state/features/users/usersSlice";
import {selectUsersData} from "../src/state/features/users/usersSelector";
import {useGetUserListQuery} from "../src/state/features/users/userApiSlice";

export default function Home() {
    const dispatch = useDispatch();
    const {data = [], isLoading} = useSelector(selectUsersData);
    const {data: userList} = useGetUserListQuery({});

    console.log({userList})

    let content: null | React.ReactNode;
    if (isLoading) {
        content = <p>isLoading...</p>
    } else if (data?.length > 0) {
        content = (
            <u>
                {data.map((user: {id: string, email: string}) => (
                    <li key={user.id}>{user.email}</li>
                ))}
            </u>
        )
    }

    useEffect(() => {
        dispatch(getUsersData())
    }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Remote App</title>
        <meta name="description" content="Remote App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Remote App!</a>
        </h1>

          {content}
      </main>
    </div>
  )
}
