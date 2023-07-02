import Comment from "./Comment";

const comments = [
	{
		name: "손은비",
		comment: "안녕하세요, 은비입니다.",
	},
	{
		name: "김지수",
		comment: "안녕하세요, 지수입니다.",
	},
	{
		name: "배고파요",
		comment: "안녕하세요, 식단중입니다.",
	}
];

function CommentList(props) {
	return (
		<div>
			{comments.map((comment) => {
				return (
					<Comment name={comment.name} comment={comment.comment}/>
				);
			})};
		</div>
	);
}

export default CommentList;