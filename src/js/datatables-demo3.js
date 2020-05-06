// Call the dataTables jQuery plugin
$(document).ready(function () {
  $('#dataTable').DataTable({
    order: [],
    columnDefs: [{ orderable: false, targets: [0, 6] }]

  })

  $('#tablamp').DataTable({
    order: [],
    columnDefs: [{ orderable: false, targets: [0, 5] }]

  })
  $('#dataTable2').DataTable({
    order: [],
    columnDefs: [{ orderable: false, targets: [5] }]

  })
  $('#dataTable3').DataTable({
    order: [],
    columnDefs: [{ orderable: false, targets: [6] }]

  })

  $('#dataTable4').DataTable({
    
  })
});

