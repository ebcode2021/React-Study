const students = [
	{
		id: 1,
		name: "Eunbi",
	},
	{
		id: 2,
		name: "Eunson" 
	},
	{
		id: 3,
		name: "Racoon",
	},
];

function AttendanceBook(props) {
	return (
		<ul>
			{students.map((student) => {
				return <li key={student.id}>{student.name}</li>
			})}
		</ul>
	);
}

export default AttendanceBook;