var pictures = {};

/**
 * LRANGE pic:recent 0 -1
 * picIds.forEach; GET pic:[id]
 */
pictures.list = function (req, res) {
  res.json(501, [{
    message: 'Not Implemented'
  }])
};

/**
 * INCR pic:id
 * SET pic:[id] [url]
 * channel.lpush('pic', [url])
 * LPUSH pic:recent [id]
 * while reply-- > 10; RPOP pic:recent
 */
pictures.upload = function (req, res) {
  res.json(501, {
    message: 'Not Implemented'
  })
};

exports.pictures = pictures;