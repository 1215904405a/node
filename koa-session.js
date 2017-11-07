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
