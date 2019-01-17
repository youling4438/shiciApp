import React from 'react'
import PropTypes from 'prop-types'
import pure from 'recompose/pure'
import styled from 'styled-components'

const Intro = styled.p`font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-size: 40px;`
const ChangeShici = styled.div`
	font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
	font-size: 20px;
	text-align: center;
	margin-bottom: 20px;

	.changeButton{
		cursor:pointer;
		color: #000;
		border-bottom: 1px dashed currentColor;
	}

	.changeButton:hover{
		border-bottom-style: solid;
	}
`

function Shici({ change, oneShici }) {
	return (
		<section>
			<Intro>
				{oneShici}
			</Intro>
			<ChangeShici>
				<a onClick={change} className="changeButton">切换诗词</a>
			</ChangeShici>
		</section>
	)
}

Shici.propTypes = {
	change: PropTypes.func.isRequired,
	oneShici: PropTypes.string.isRequired,
}

export default pure(Shici)
