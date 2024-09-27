const TableHead = () => {
  return (
    <thead className="bg-green-100">
      <tr>
        <th className="p-4 text-left">Task</th>
        <th className="p-4 text-center">Status</th>
        <th className="p-4 text-center">Due Date</th>

        <th className="p-4 text-center">Delete</th>
      </tr>
    </thead>
  );
};

export default TableHead;
