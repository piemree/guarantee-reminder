export default function ({ app,store }) {
  const token = store.state.user.token

  app.$cookiz.set("token",token)
 
}
