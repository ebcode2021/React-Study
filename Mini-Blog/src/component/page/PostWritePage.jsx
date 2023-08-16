import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import { useState } from 'react';
import TextInput from '../ui/TextInput';

const Wrapper = styled.div`
	width: calc(100% - 32px);
	padding: 8px 16px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	}
`;

const Container = styled.div`
	width: 100%;
	max-width: 720px;
	& > * {
		:not(:last-child) {
			margin-bottom: 16px;
		}
	}
`;

const PostWritePage = (props) => {
	const navigate = useNavigate();

	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	return (
		<Wrapper>
			<Container>
				<TextInput
					height={20}
					value={title}
					onChange={(event) => {
						setTitle(event.target.value);
					}}
				/>
				<TextInput
					height={480}
					value={content}
					onChange={(event) => {
						setContent(event.target.value);
					}}
				/>
				<Button
					title="글 작성하기"
					onClick={() => {
						navigate('/');
					}}
				/>
			</Container>
		</Wrapper>
	);
};

export default PostWritePage;
