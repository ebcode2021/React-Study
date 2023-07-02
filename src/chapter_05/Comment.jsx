import "./styles.css"

function	Comment(props) {
	return (
		<div className="wrapper">
			<div className="imageContainer">
				<img 
					className="image"
					src="https://img.freepik.com/premium-photo/raccoon-9-months-procyon-lotor-isolated_191971-11672.jpg" 
				/>
			</div>
			<div className="contentContainer">
				<span className="nameText">
					{props.name}
				</span>
				<span className="commentText">
					{props.comment}
				</span>
			</div>
		</div>
	);
}

export default Comment;

// remove jsx css style
// function	Comment(props) {
// 	return (
// 		<div style={styles.wrapper}>
// 			<div style={styles.imageContainer}>
// 				<img src="https://img.freepik.com/premium-photo/raccoon-9-months-procyon-lotor-isolated_191971-11672.jpg" 
// 					style={styles.image}/>
// 			</div>
// 			<div style={styles.contentContainer}>
// 				<span style={styles.nameText}>
// 					은비
// 				</span>
// 				<span style={styles.commentText}>
// 					내가 만든 컴포넌트
// 				</span>
// 			</div>
// 		</div>
// 	);
// }

// export default Comment;

// const styles = {
//     wrapper: {
//         margin: 8,
//         padding: 8,
//         display: "flex",
//         flexDirection: "row",
//         border: "1px solid grey",
//         borderRadius: 16,
//     },
//     imageContainer: {},
//     image: {
//         width: 50,
//         height: 50,
//         borderRadius: 25,
//     },
//     contentContainer: {
//         marginLeft: 8,
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//     },
//     nameText: {
//         color: "black",
//         fontSize: 16,
//         fontWeight: "bold",
//     },
//     commentText: {
//         color: "black",
//         fontSize: 16,
//     },
// };