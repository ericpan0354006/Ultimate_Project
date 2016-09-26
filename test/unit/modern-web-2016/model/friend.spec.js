describe('對 Friend Model 進行使用者驗證', function() {

  let friend = null;

  before(async (done) => {
    // 建立測試的 friend 資料
    // 在進行 Login 驗證前需要先有 Friend 存在

    try {
      // 撰寫使用者建立程式碼
      friend = {}

      done();
    } catch (e) {
      done(e);
    }
  });

  it('透過 email 以及 password 確認使用者確實存在', async (done) => {
    try {

      // input
      let where = {
        email: friend.email,
        fbId: friend.fbId,
        name: friend.name
      }

      //process and Output，在此實作查詢出在 before 建立的使用者。
      let friendExist = {};

      //check Output
      friendExist.email.should.be.equal(friend.email);
      friendExist.fbId.should.be.equal(friend.fbId);
      friendExist.name.should.be.equal(friend.name);
      done();
    } catch (e) {
      done(e);
    }
  });
});
