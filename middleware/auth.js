export default function ({ route, redirect, store }) {

  const token = store.state.user.token
  
  if (route.path === '/') {
    if (token) return redirect('/home')
    return
  }
  if (!token) return redirect('/')
}
