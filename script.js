const checkboxes = Array.from(document.getElementsByClassName('ckbx'));
const selectedElementsCounter = document.getElementById('selectedElements');
const selectAllCheckbox = document.getElementById('selectall');

selectAllCheckbox.addEventListener('change', (event) => {
  selectOrDeselectAll(event.target.checked);
  updateCounter();
});

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', (event) => {
    selectRow(event.target);
    updateCounter();
  });
});

function selectOrDeselectAll(selectAll) {
  checkboxes.forEach((checkbox) => setCheckedProperty(checkbox, selectAll));
}

function selectRow(checkboxElement) {
  const { id, checked } = checkboxElement;
  const checkbox = checkboxes.find((c) => c.id === id);
  setCheckedProperty(checkbox, checked);
}

function setCheckedProperty(checkbox, isChecked) {
  checkbox.checked = isChecked;
}

function updateCounter() {
  const selectedRows = checkboxes.filter((c) => !!c.checked);
  selectedElementsCounter.textContent = selectedRows.length + ' righe selezionate';
}
