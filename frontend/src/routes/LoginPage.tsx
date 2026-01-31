import Login from '@/components/auth/login'

type Props = {}

const LoginPage = (props: Props) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-grey-800">
      <Login />
    </div>
  )
}

export default LoginPage