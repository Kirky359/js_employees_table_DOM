/* eslint-disable function-paren-newline */
/* eslint-disable prettier/prettier */
'use strict';

// write code here

const tr = document.querySelector('tr');

tr.querySelectorAll('th').forEach((th) => {
  th.className = th.textContent.toLowerCase();
  th.style.cursor = 'pointer';

  th.addEventListener('click', () => {
    const currentDir = th.dataset.sortDir === 'asc' ? 'asc' : 'desc';
    const newDir = currentDir === 'asc' ? 'desc' : 'asc';

    th.dataset.sortDir = newDir;

    sortBy(th.textContent, newDir);
  });
});

const sortBy = (method, direction) => {
  const body = document.querySelector('tbody');
  const rows = Array.from(body.querySelectorAll('tr'));

  let index;

  switch (method) {
    case 'Name':
      index = 0;

      rows.sort((a, b) =>
        a.children[index].textContent.localeCompare(
          b.children[index].textContent,
          undefined,
          { sensitivity: 'base' },
          // eslint-disable-next-line prettier/prettier
        ),
      );
      break;

    case 'Position':
      index = 1;

      rows.sort((a, b) =>
        a.children[index].textContent.localeCompare(
          b.children[index].textContent,
          undefined,
          { sensitivity: 'base' },
          // eslint-disable-next-line prettier/prettier
        ),
      );
      break;

    case 'Office':
      index = 2;

      rows.sort((a, b) =>
        a.children[index].textContent.localeCompare(
          b.children[index].textContent,
          undefined,
          { sensitivity: 'base' },
          // eslint-disable-next-line prettier/prettier
        ),
      );
      break;

    case 'Age':
      index = 3;

      rows.sort(
        (a, b) =>
          Number(a.children[index].textContent) -
          Number(b.children[index].textContent),
      );
      break;

    case 'Salary':
      index = 4;

      rows.sort((a, b) => {
        const numA = Number(
          a.children[index].textContent.replace(/[^0-9.-]+/g, ''),
        );
        const numB = Number(
          b.children[index].textContent.replace(/[^0-9.-]+/g, ''),
        );

        return numA - numB;
      });
      break;
  }

  if (direction === 'desc') {
    rows.reverse();
  }

  rows.forEach((row) => body.appendChild(row));
};

const allTr = document.querySelectorAll('tr');

allTr.forEach((t) => {
  t.addEventListener('click', () => {
    if (t === allTr[0]) {
      return;
    }

    if (t.classList.contains('active')) {
      t.classList.remove('active');

      return;
    }

    allTr.forEach((r) => r.classList.remove('active'));

    t.classList.add('active');
  });
});
