import { useSelector } from 'react-redux'

const Home = () => {
	const AllDoggies = useSelector((state) => state.doggies)

	return (
		<div>
			<h2>esto es home</h2>
		</div>
	)
}

export { Home }
