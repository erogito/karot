import { Link } from 'gatsby'
import React from 'react'
import Header from '../components/header'

import style from '../styles/account.module.scss'

const DefaultCard = () => {
  return (
    <div className={`content-center ${style.details_card} ${style.details_card__default}`}>
      <h2 className={`text-sm text-center`}>
        <p>You haven't made any connections yet.</p>
        <p>Any connections you make will appear here</p>
      </h2>
    </div>
  )
}

const Details = ({ user }) => {
  return (
    <section className={`${style.details}`}>
      <header className={` header ${style.details_header}`}>
        <h1 className={`title text-lg text-center`}>Account Details</h1>
        <div className={`${style.details_avatar}`}>
          <img src={user.picture} alt='avatar' />
        </div>
      </header>
      <div className={`${style.details_details}`}>
        <h1 className={`${style.details_detail}`}>
          <p className={`subtitle text-sm`}>Username</p>
          <p className={`text-md`}>{user.nickname}</p>
        </h1>
        <h2 className={`${style.details_detail}`}>
          <p className={`subtitle text-sm`}>E-mail</p>
          <p className={`text-md`}>{user.email}</p>
        </h2>
      </div>
      <article className={`${style.details_connections}`}>
        <Header title='Connections' />
        <DefaultCard />

        <Link to='/connections/' className={`button`}>
          Make a connection.
        </Link>
      </article>
    </section>
  )
}

export default Details
