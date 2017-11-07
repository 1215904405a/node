/**
  // 随机字符串方法
  crypto.randomBytes(32, (err, buf) => {
    if (err) throw err;
    console.log(`${buf.length} bytes of random data: ${buf.toString('base64')}`);
  });
***/

// 加密算法规则  koa-session加密方式
 let sig1 = crypto.createHmac('sha1', 'P@LW9XXA@O10ZrXj~!]/mNHH').update('X=' + encode({ "providerId": "1000754" })).digest('base64').replace(/\/|\+|=/g, function(x) {
   return ({ "/": "_", "+": "-", "=": "" })[x]
 });



app.keys = ['some secret hurr'];

const CONFIG = {
  key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  overwrite: true, /** (boolean) can overwrite or not (default true)  cookie能否被覆盖*/
  httpOnly: true, /** (boolean) httpOnly or not (default true)  能否被document.cookie读取防止跨脚本攻击   Set-Cookie: =[; =]
[; expires=][; domain=]
[; path=][; secure][; HttpOnly]*/
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. default is false **/
};

app.use(session(CONFIG, app));
