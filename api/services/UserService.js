module.exports = {

  checkUser: async ({user}) => {
    try {
      let where = {
        email: user.email,
        password: user.password
      }

      // 根據 model 的 spec 完成下列實作
      let userExist = await User.findOne({
        where: where
      });

      return userExist;

    } catch (e) {
      throw e;
    }
  },
  createUser: async ({user}) => {
    try {
      // let where = {
      //   email: user.email,
      //   password: user.password
      // }

      console.log(user.email);
      console.log(user.password);

      // 根據 model 的 spec 完成下列實作
      let userCreate = await User.create({
        email: user.email,
        password: user.password
      });

      return userCreate;

    } catch (e) {
      throw e;
    }
  },
  deleteUser: async ({user}) => {
    try {
      // let where = {
      //   email: user.email,
      //   password: user.password
      // }

      console.log("email : " + user.email);
      console.log("password : " + user.password);

      // 根據 model 的 spec 完成下列實作
      let userDelete = await User.destroy({
        where : {
          email: user.email,
          password: user.password
        }
      });

      return userUpdate;

    } catch (e) {
      throw e;
    }
  },
  updateUser: async ({user}) => {
    try {
      // let where = {
      //   email: user.email,
      //   password: user.password
      // }
      console.log("email : " + user.email);
      console.log("password : " + user.password);

      // 根據 model 的 spec 完成下列實作
      let userUpdate = await User.update({
          password: user.password
      }, {where : {email : user.email} }
      );

      return userUpdate;

    } catch (e) {
      throw e;
    }
  },
}
