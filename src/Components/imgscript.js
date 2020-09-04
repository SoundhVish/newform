dropzone2.uploadFiles = function(files) {
    removelogodropzone();
var self = this;

for (var i = 0; i < files.length; i++) {

  var file = files[i];
  projectlogo=file;
  document.getElementById('logodropzonefile').value=file.name;
      totalSteps = Math.round(Math.min(maxSteps, Math.max(minSteps, file.size / bytesPerStep)));

  for (var step = 0; step < totalSteps; step++) {
    var duration = timeBetweenSteps * (step + 1);
    setTimeout(function(file, totalSteps, step) {
      return function() {
        file.upload = {
          progress: 100 * (step + 1) / totalSteps,
          total: file.size,
          bytesSent: (step + 1) * file.size / totalSteps
        };

        self.emit('uploadprogress', file, file.upload.progress, file.upload.bytesSent);
        if (file.upload.progress == 100) {
          file.status = Dropzone.SUCCESS;
          self.emit("success", file, 'success', null);
          self.emit("complete", file);
          $('#clearlogodropzone').css('display','');
          self.processQueue();
        }
      };
    }(file, totalSteps, step), duration);
  }
}
}

function removelogodropzone(){
dropzone2.removeAllFiles();
$('#clearlogodropzone').css('display','none');
$('#logodropzonefile').val('');
}