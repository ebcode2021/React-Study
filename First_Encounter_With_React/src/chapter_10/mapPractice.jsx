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

// id를 key값으로 사용
{students.map((student) => {
	<li key={student.id}>{student.name}</li>;
})}

// 포멧팅 된 문자열을 키값으로 사용
{students.map((student, index) => {
	<li key={`student-id-${student.id}`}>{student.name}</li>
})}

// 배열의 인덱스를 키값으로 사용
{students.map((student, index) => {
	<li key={index}>{student.name}</li>
})}