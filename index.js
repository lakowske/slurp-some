/*
 * (C) 2015 Seth Lakowske
 */

function slurp(stream, max_amount, callback) {

    var content = '';

    stream.on('data', function(data) {
        content += data;

        if (content.length > max_amount) {
            callback('max amount exceeded', content);
        }
        
    });

    stream.on('end', function() {
        callback(null, content);
    });
    
}

module.exports.slurp = slurp;
