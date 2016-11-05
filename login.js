let login = (username, password) => {
  if(username !=='admin' || password !='1234') {
    console.log('incorect login');
  }
};

login('admin','admin');
