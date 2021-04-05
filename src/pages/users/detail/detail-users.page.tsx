import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import AlertCustom from '../../../components/alert/alert.component'
import DetailCard from '../../../components/detail-card/detail-card.component'
import Spinner from '../../../components/spinner/spinner'
import {
  getDetailUserErrorSelector,
  getPendingSelector,
} from '../../../store/users/selectors'
import {
  fetchDeleteUser,
  fetchDetailUserRequest,
  fetchUpdateUser,
  resetUser,
} from '../../../store/users/actions'
import { getUserSelector } from '../../../store/users/selectors'
import { IUser } from '../../../store/users/types'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import {
  LogoutButton,
  StyledBackButton,
} from '../../../components/styled-common-components/styled-common-components'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { removeToken } from '../../../utils/utils'
import { resetLogin } from '../../../store/auth/actions'

function DetailUsersPage(props: any) {
  const dispatch = useDispatch()
  const history = useHistory()
  const { id } = props.location.state

  const user = useSelector(getUserSelector)
  const error = useSelector(getDetailUserErrorSelector)
  const pending = useSelector(getPendingSelector)

  const updateUser = (user: IUser) => {
    dispatch(fetchUpdateUser({ user }))
  }

  const deleteUser = (id: number) => {
    dispatch(fetchDeleteUser({ id }, history))
  }

  const getUser = (): IUser => {
    return user.find((item: IUser) => item.id === parseInt(id))
  }

  const logout = (): void => {
    removeToken()
    dispatch(resetLogin())
    dispatch(resetUser())
    history.push('/login')
  }

  useEffect(() => {
    dispatch(fetchDetailUserRequest(parseInt(id)))
  }, [])

  return (
    <div className="app-container">
      <LogoutButton onClick={() => logout()}>
        <ExitToAppIcon fontSize="large" color="secondary" />
      </LogoutButton>
      <StyledBackButton
        aria-label="delete"
        onClick={() =>
          history.push({
            pathname: `/list-users/${id}`,
            state: { reloadData: false },
          })
        }
      >
        <ArrowBackIcon fontSize="large" color="secondary" />
      </StyledBackButton>
      {!pending && getUser() && (
        <DetailCard
          user={getUser()}
          updateUser={updateUser}
          deleteUser={deleteUser}
        ></DetailCard>
      )}
      {pending && <Spinner></Spinner>}
      {error && <AlertCustom message={error} />}
    </div>
  )
}

export default DetailUsersPage
