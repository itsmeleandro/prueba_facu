// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable({
    order: [],
    columnDefs: [ { orderable: false, targets: [0, 7] } ]
    })

    $('#dataTable7').DataTable({
      order: [],
      columnDefs: [ { orderable: false, targets: [0, 8] } ]
      })
  });
    
   