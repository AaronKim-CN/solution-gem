
module.exports = {

    updateStatus: function(req, res, next) {

        console.log(req.body);
        res.header('Content-Type', 'application/json; charset=utf-8');

        // Response body. 
        let responsebody = {}
        responsebody['InternalOrderId'] = '12121212'
        responsebody['OrderId'] = 'GE090121JP'
        responsebody['StatusCode '] = 'success'
        responsebody['Success'] = true
        responsebody['ErrorCode'] = 'Error001'
        responsebody['Message'] = 'This is message'
        responsebody['Description'] = 'Error description'

        res.send(responsebody);

    }
}