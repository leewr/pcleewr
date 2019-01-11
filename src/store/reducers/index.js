import { combineReducers } from 'redux'
import user from './user'

export default function() {
	const states = {
		user: user()
	}
	return combineReducers(states)
}