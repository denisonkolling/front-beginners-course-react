import useAppContext from '../hook/useAppContext';

export default function ChildrenOne() {
	const [name, number] = useAppContext();

	return (
		<div>
			{name} e número {number}
		</div>
	);
}
