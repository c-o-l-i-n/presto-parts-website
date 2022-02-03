import '../index/index'

const issueForm = document.getElementById('issue-form')
const statusElement = document.getElementById('status')

const action = 'https://formspree.io/f/xayveble'
const method = 'POST'

issueForm.action = action
issueForm.method = method

const submit = async (data, type) => {
	issueForm.hidden = true
	statusElement.hidden = false
	statusElement.innerHTML = `Submitting ${type} report...`

	fetch(action, {
		method: method,
		body: data,
		headers: {
			Accept: 'application/json',
		},
	})
		.then((response) => {
			console.log(response)
			if (response.ok) {
				statusElement.innerHTML = 'Thanks for your submission!'
			} else {
				response.json().then((data) => {
					if (Object.hasOwn(data, 'errors')) {
						statusElement.innerHTML = data['errors']
							.map((error) => error['message'])
							.join(', ')
					} else {
						statusElement.innerHTML = `Oops! There was a problem submitting the ${type} report`
					}
				})
			}
		})
		.catch((error) => {
			console.log(error)
			statusElement.innerHTML = `Oops! There was a problem submitting the ${type} report`
		})
}

const submitErrorReport = async () => {
	const data = new FormData()
	const params = new URLSearchParams(window.location.search)

	for (const [key, value] of params) {
		data.append(key, value)
	}

	await submit(data, 'error')
	window.history.replaceState(null, null, window.location.pathname)
}

issueForm.addEventListener('submit', async (e) => {
	e.preventDefault()
	const data = new FormData(e.target)
	submit(data, 'issue')
})

if (new URLSearchParams(window.location.search).toString()) {
	submitErrorReport()
}
