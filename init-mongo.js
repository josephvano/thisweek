db.createUser({
  user : 'thisweek',
  pwd  : '********',
  roles: [
    {
      role: 'readWrite',
      db  : 'thisweek'
    }
  ]
})