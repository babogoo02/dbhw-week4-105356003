
var API_PATH = "http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=8f6fcb24-290b-461d-9d34-72ed1b3f51f0";
function getData(cb) {
  $.ajax({
    url : API_PATH,
    method : "GET",
    success : function(data) {
      cb(null, data);
    },
    error : function(err) {
      cb(err);
    }
  });
}
