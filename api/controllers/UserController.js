module.exports = {
  signin: async (req, res) => {
    try {
      // 從前端 request 取得 form 表單內容
      let user = req.body;

      // 呼叫 UserService.checkUser 完成相關處理
      let userExist = await UserService.checkUser({user});
      req.session.userEmail = user.email;   // returned from a database
      console.log("hey" + req.session.userEmail);

      // 回傳驗證結果
      res.view('info.jade', {user: userExist, loginSuccess: true});
      //return res.json(user);
    } catch (e) {
      res.serverError(e);
    }
  },
  signup: async (req, res) => {
    try {
      // 從前端 request 取得 form 表單內容
      let user = req.body;

      // 呼叫 UserService.checkUser 完成相關處理
      let newUser = await UserService.createUser({user});

      // 回傳驗證結果
      res.view('createSuccess.jade', {user: newUser, createSuccess: true});
    } catch (e) {
      res.serverError(e);
    }
  },
  delete: async (req, res) => {
    try {
      // 從前端 request 取得 form 表單內容
      let user = req.body;
      console.log("delete = running");

      // 呼叫 UserService.checkUser 完成相關處理
      let dUser = await UserService.deleteUser({user});

      // 回傳驗證結果
      res.view('deleteSuccess.jade', {user: dUser, deleteSuccess: true});
    } catch (e) {
      res.serverError(e);
    }
  },
  logout: async (req, res) => {
    try {
      // 從前端 request 取得 form 表單內容
      let user = req.body;
      console.log("logout = running and session : " + req.session.userEmail);

      // 呼叫 UserService.checkUser 完成相關處理
      req.session.userEmail = null;

      // 回傳驗證結果
      res.view('/');
    } catch (e) {
      res.serverError(e);
    }
  },
  update: async (req, res) => {
    try {
      // 從前端 request 取得 form 表單內容
      let user = req.body;

      // 呼叫 UserService.checkUser 完成相關處理
      let updateUser = await UserService.updateUser({user});

      // 回傳驗證結果
      res.view('updateSuccess.jade', {user: updateUser, createSuccess: true});
    } catch (e) {
      res.serverError(e);
    }
  },
  upload: async (req, res) => {
    if (req.method === 'GET')
        return res.json({ 'status': 'GET not allowed' });
    //	Call to /upload via GET is error

    var uploadFile = req.file('uploadFile');
    console.log(uploadFile);

    uploadFile.upload({
      dirname: '../../assets/images/'
    },    function onUploadComplete(err, files) {
        //	Files will be uploaded to .tmp/uploads


        if (err) return res.serverError(err);
        //	IF ERROR Return and send 500 error with error

        console.log(files);
        req.session.imgfd = files.fd;
        console.log(req.session.imgfd);
        res.json({ status: 200, file: files });
    });
  },
}
