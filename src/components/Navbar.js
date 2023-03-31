import React,{ Component } from 'react'
import { Link } from 'react-router-dom';


export default function Navbar() {

    return (

        <div>
            <nav className="navbar navbar-expand-lg bg-white" >
                <Link className="navbar-brand" to="/">
                    <img alt=" " src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI1MCAyNTAiPjxkZXNjPkNyZWF0ZWQgd2l0aCBTbmFwPC9kZXNjPjxkZWZzPjwvZGVmcz48ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjAzNjUsMCwwLDAuMDM2NSwxMC40MzMxLDEzNC4zNDg3KSI+PGc+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMS4wMjQsMCwwLC0xLjAyNCwwLDApIj48ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDAsMCkiPjxwYXRoIGQ9Ik03MTQgMzYyUTcxNCAxNTYgNTk4IDc1UTQ5MSAwIDMwNCAwTDIxIDBMMjEgMTlMODcgMTlMODcgNjgxTDIxIDY4MUwyMSA3MDBMMzMwIDcwMFE1MjIgNzAwIDYxOCA2MjFRNzE0IDU0MyA3MTQgMzYyWk0yODIgNjgxTDI4MiAxOUwzMjAgMTlRNDIxIDE5IDQ2NCA5MFE1MDggMTYyIDUwOCAzMzBMNTA4IDM4OFE1MDggNjEzIDQyMiA2NTlRMzgxIDY4MSAzMDYgNjgxTDI4MiA2ODFaIiBmaWxsPSIjMmQyOTI2IiBzdHlsZT0iIj48L3BhdGg+PC9nPjxnIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsNzU1LDApIj48cGF0aCBkPSJNMTU3IDU0NVExMDQgNTQ1IDgxIDU3MlE1OSA1OTkgNTkgNjM5UTU5IDY3OSA4MyA3MDVRMTA4IDczMSAxNTggNzMxUTIwOCA3MzEgMjM0IDcwN1EyNjAgNjg0IDI2MCA2NDBRMjYwIDU5NyAyMzUgNTcxUTIxMCA1NDUgMTU3IDU0NVpNNiA0NThMNiA0NzZMMjUxIDQ3NkwyNTEgMThMMzA3IDE4TDMwNyAwTDEwIDBMMTAgMThMNjUgMThMNjUgNDU4TDYgNDU4WiIgZmlsbD0iIzJkMjkyNiIgc3R5bGU9IiI+PC9wYXRoPjwvZz48ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDEwNzIsMCkiPjxwYXRoIGQ9Ik00MTEgNTI4TDQzOSA1NDVRNDQ1IDU3NiA0MTUgNTc2UTM3MiA1NzYgMzcyIDUxMFEzNzIgNDg0IDM3OSA0NTBRNDU1IDM5OSA0NTUgMzE5UTQ1NSAyNDAgNDAwIDE5NlEzNDUgMTUyIDI1MSAxNTJRMjEyIDE1MiAxNzAgMTYwUTEyNiAxMzIgMTI2IDExOFExMjYgMTA0IDE5MCAxMDRMMjkyIDEwNFE1MTkgMTA0IDUxOSAtNTlRNTE5IC0xNDcgNDUwIC0xOTlRMzgyIC0yNTAgMjM3IC0yNTBRLTEwIC0yNTAgLTEwIC0xNDNRLTEwIC04NSA2NyAtNjNMMTI3IC05MFExMTkgLTExOSAxMTkgLTE0NVExMTkgLTIzMSAyNDcgLTIzMVEzMjUgLTIzMSAzNjcgLTIwMlE0MDkgLTE3MyA0MDkgLTEzMFE0MDkgLTg3IDM4MyAtNzNRMzU4IC01OCAyODIgLTU4TDE4NSAtNThRMTA0IC01OCA2OSAtMzFRMzQgLTQgMzQgMzVRMzQgNzUgNTkgMTAxUTg0IDEyOCAxNDggMTY3UTMyIDIwMCAzMiAzMTlRMzIgMzk0IDg2IDQ0MFExNDAgNDg2IDI0OCA0ODZRMzEzIDQ4NiAzNTkgNDYxUTM1MyA0ODggMzUzIDUxMFEzNTMgNTY2IDM4MyA1OTFRNDEzIDYxNiA0NTAgNjE2UTQ4NyA2MTYgNTA5IDU5NlE1MzIgNTc3IDUzMiA1NDNRNTMyIDUwOSA1MTQgNDkyUTQ5NiA0NzYgNDcwIDQ3NlE0NDUgNDc2IDQyOCA0ODlRNDEyIDUwMyA0MTEgNTI4Wk0xOTkgMzQxTDE5OSAyODdRMTk5IDIyMCAyMTAgMTk2UTIyMiAxNzIgMjQ1IDE3MlEyNjkgMTcyIDI3OSAxOTVRMjkwIDIxOSAyOTAgMjkyTDI5MCAzNDFRMjkwIDQxOSAyODAgNDQzUTI3MCA0NjggMjQ2IDQ2OFEyMjMgNDY4IDIxMSA0NDJRMTk5IDQxNyAxOTkgMzQxWiIgZmlsbD0iIzJkMjkyNiIgc3R5bGU9IiI+PC9wYXRoPjwvZz48ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDE1OTQsMCkiPjxwYXRoIGQ9Ik0xNTcgNTQ1UTEwNCA1NDUgODEgNTcyUTU5IDU5OSA1OSA2MzlRNTkgNjc5IDgzIDcwNVExMDggNzMxIDE1OCA3MzFRMjA4IDczMSAyMzQgNzA3UTI2MCA2ODQgMjYwIDY0MFEyNjAgNTk3IDIzNSA1NzFRMjEwIDU0NSAxNTcgNTQ1Wk02IDQ1OEw2IDQ3NkwyNTEgNDc2TDI1MSAxOEwzMDcgMThMMzA3IDBMMTAgMEwxMCAxOEw2NSAxOEw2NSA0NThMNiA0NThaIiBmaWxsPSIjMmQyOTI2IiBzdHlsZT0iIj48L3BhdGg+PC9nPjxnIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsMTkxMSwwKSI+PHBhdGggZD0iTTYwIDE0M0w2MCA0NThMNSA0NThMNSA0NzZMNjAgNDc2TDYwIDYwNUwyNDYgNjUxTDI0NiA0NzZMMzc2IDQ3NkwzNzYgNDU4TDI0NiA0NThMMjQ2IDEyMVEyNDYgNzQgMjU1IDUyUTI2NSAzMCAyOTUgMzBRMzI1IDMwIDM0NyA2MFEzNzAgOTAgMzc3IDE0MkwzOTQgMTQwUTM4NiA3MSAzNTAgMzBRMzE0IC0xMCAyMzEgLTEwUTE0OCAtMTAgMTA0IDIzUTYwIDU2IDYwIDE0M1oiIGZpbGw9IiMyZDI5MjYiIHN0eWxlPSIiPjwvcGF0aD48L2c+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSwyMzA1LDApIj48cGF0aCBmaWxsPSIjMmQyOTI2IiBzdHlsZT0iIj48L3BhdGg+PC9nPjxnIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsMjQ4NSwwKSI+PHBhdGggZD0iTTIxIDY4MUwyMSA3MDBMMzIwIDcwMFE0NTkgNzAwIDUyOCA2NjJRNTk4IDYyNSA1OTggNTM2UTU5OCAzOTkgNDMzIDM3Mkw0MzMgMzcwUTYzMyAzNDUgNjMzIDE5NlE2MzMgODcgNTUxIDQzUTQ2OSAwIDMxNSAwTDIxIDBMMjEgMTlMODYgMTlMODYgNjgxTDIxIDY4MVpNMzA0IDM1NEwyODEgMzU0TDI4MSAxOUwzMjggMTlRMzgzIDE5IDQwNSA1N1E0MjcgOTUgNDI3IDE2OUw0MjcgMjIyUTQyNyAyODggNDAwIDMyMVEzNzMgMzU0IDMwNCAzNTRaTTMxMyA2ODFMMjgxIDY4MUwyODEgMzczTDMwNyAzNzNRMzU5IDM3MyAzNzkgNDA0UTQwMCA0MzYgNDAwIDUwMUw0MDAgNTQ4UTQwMCA2MjIgMzgyIDY1MVEzNjQgNjgxIDMxMyA2ODFaIiBmaWxsPSIjMmQyOTI2IiBzdHlsZT0iIj48L3BhdGg+PC9nPjxnIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsMzE0NCwwKSI+PHBhdGggZD0iTTM0NCA0NDhRMzA3IDQ0OCAyNzkgNDAwUTI1MSAzNTIgMjUxIDI4NkwyNTEgMThMMzIyIDE4TDMyMiAwTDEwIDBMMTAgMThMNjUgMThMNjUgNDU4TDEwIDQ1OEwxMCA0NzZMMjUxIDQ3NkwyNTEgMzgwUTI2NCA0MzEgMzAxIDQ1OFEzMzggNDg2IDM4NSA0ODZRNDMyIDQ4NiA0NjEgNDU5UTQ5MSA0MzMgNDkxIDM4NFE0OTEgMzM2IDQ2OSAzMTBRNDQ3IDI4NCA0MDEgMjg0UTM1NiAyODQgMzM0IDMxNFEzMTMgMzQ0IDMyOSAzOTdMMzY1IDM5N1EzOTAgNDQ4IDM0NCA0NDhaIiBmaWxsPSIjMmQyOTI2IiBzdHlsZT0iIj48L3BhdGg+PC9nPjxnIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsMzYzOSwwKSI+PHBhdGggZD0iTTMzMyAxOTdMMzMzIDI4MlEzMzMgMzc5IDMyMiA0MjNRMzEyIDQ2OCAyNzQgNDY4UTI1MiA0NjggMjM4IDQ1NVEyMjUgNDQzIDIxOSA0MTRRMjEwIDM2OSAyMTAgMjc3TDIxMCAxOTlRMjEwIDkwIDIxNiA2OFEyMjMgNDYgMjMwIDMyUTI0MSA4IDI3MyA4UTMxMiA4IDMyNCA1M1EzMzMgODUgMzMzIDE5N1pNMjcxIC0xMFExNDYgLTEwIDgyIDU0UTE4IDExOCAxOCAyMzdRMTggMzU3IDg2IDQyMVExNTUgNDg2IDI3OSA0ODZRNDAzIDQ4NiA0NjQgNDI2UTUyNSAzNjcgNTI1IDI0NVE1MjUgLTEwIDI3MSAtMTBaIiBmaWxsPSIjMmQyOTI2IiBzdHlsZT0iIj48L3BhdGg+PC9nPjxnIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsNDE4MiwwKSI+PHBhdGggZD0iTTYxNSAwTDMzNyAwTDMzNyAxOEwzODMgMThMMjcwIDI1MEwyNTEgMjQ1TDI1MSAxOEwyOTcgMThMMjk3IDBMMTAgMEwxMCAxOEw2NSAxOEw2NSA3MzJMNiA3MzJMNiA3NTBMMjUxIDc1MEwyNTEgMjY1TDI2NyAyNzFMNDkyIDQ1OEwzOTggNDU4TDM5OCA0NzZMNTk1IDQ3Nkw1OTUgNDU4TDUyNSA0NThMNDA2IDM1N0w1NzkgMThMNjE1IDE4TDYxNSAwWiIgZmlsbD0iIzJkMjkyNiIgc3R5bGU9IiI+PC9wYXRoPjwvZz48ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDQ4MDIsMCkiPjxnIHRyYW5zZm9ybT0ibWF0cml4KDEuMjc3MiwwLDAsMS4yNzcyLC02My4wODEyLDQ5My40NTgyKSI+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsLTEsMCwwKSI+CjxwYXRoIGQ9Ik0xNDIuNCwxNTguNGwxOTYuMiwwYzUuOC05NC44LTc2LjItMTY5LTE2OC4zLTE0OS40QzEwMy41LDIzLjMsNTMuOSw4OSw2MiwxNTkuOWM1LjgsMzIuNywyMy43LDU0LjQsNDIuNSw4NS4yCgljMTYuOCwyOCwyMCw1MS43LDIyLjgsODQuOWgwYy0xLjQsMjAuOCwwLjYsNDAuMiwyMSw0N2M5LjcsMjMuOSwyMi45LDE1LjMsNTQuNSwxN2MyNy0wLjcsNDAuNCw0LjcsNDguMy0xNwoJYzIzLTguMiwyMS40LTI4LjgsMjEtNDYuOWgwdi0yMi45bC0xMjMuNSwwYy0zLjQtMTYuOS02LjUtMzIuMy0xMi42LTUxLjNjNjQuNywzMi42LDE0Mi4zLDcuMywxNzctNTMuN0wyOTMuMSwxOTEKCWMtNjAuNCwxMDAuMS0yMDYuNSw1Ny43LTIwOC4zLTU1aC0wLjVDMTAzLjItOC41LDI5OC00LjQsMzE1LjIsMTM1LjZsLTE3Mi44LDBMMTQyLjQsMTU4LjR6IiBmaWxsPSIjMmQyOTI2IiBzdHlsZT0iIj48L3BhdGg+CjxkZXNjPkNyZWF0ZWQgd2l0aCBTbmFwPC9kZXNjPjxkZWZzPjwvZGVmcz48L2c+PC9nPjwvZz48ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDUxOTcuNDIwNywwKSI+PHBhdGggZD0iTTM0NCA0NDhRMzA3IDQ0OCAyNzkgNDAwUTI1MSAzNTIgMjUxIDI4NkwyNTEgMThMMzIyIDE4TDMyMiAwTDEwIDBMMTAgMThMNjUgMThMNjUgNDU4TDEwIDQ1OEwxMCA0NzZMMjUxIDQ3NkwyNTEgMzgwUTI2NCA0MzEgMzAxIDQ1OFEzMzggNDg2IDM4NSA0ODZRNDMyIDQ4NiA0NjEgNDU5UTQ5MSA0MzMgNDkxIDM4NFE0OTEgMzM2IDQ2OSAzMTBRNDQ3IDI4NCA0MDEgMjg0UTM1NiAyODQgMzM0IDMxNFEzMTMgMzQ0IDMyOSAzOTdMMzY1IDM5N1EzOTAgNDQ4IDM0NCA0NDhaIiBmaWxsPSIjMmQyOTI2IiBzdHlsZT0iIj48L3BhdGg+PC9nPjxnIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsNTY5Mi40MjA3LDApIj48cGF0aCBkPSJNNDUgLTEwTDMzIC0xMEwzMyAxNjlMNDUgMTY5UTcxIDgyIDExNSA0N1ExNTkgMTIgMjI1IDEyUTMyNyAxMiAzMjcgNzdRMzI3IDEwNSAzMDIgMTE5UTI2MyAxNDEgMjAyIDE1M1ExMzQgMTcxIDg4IDIwMVEzMyAyMzcgMzMgMzE1UTMzIDM5MyA4MSA0MzlRMTI5IDQ4NiAyMDkgNDg2UTI1OCA0ODYgMzEwIDQ2M1EzMjkgNDU1IDMzOSA0NTVRMzQ5IDQ1NSAzNTYgNDYyUTM2MyA0NjkgMzczIDQ4OEwzODQgNDg4TDM4NCAzMzVMMzcyIDMzNVEzMjEgNDY1IDIxNCA0NjVRMTY3IDQ2NSAxNDQgNDQ4UTEyMSA0MzIgMTIxIDQwN1ExMjEgMzkyIDEyOCAzODNRMTM1IDM3NSAxMzkgMzcxUTE0MyAzNjcgMTUyIDM2MlExNjEgMzU4IDE2NyAzNTVRMTczIDM1MyAxODUgMzQ5UTE5OCAzNDUgMjA0IDM0NFEyNzIgMzI3IDMwMiAzMTRRMzMyIDMwMiAzNTkgMjg0UTQxNCAyNDYgNDE0IDE2MVE0MTQgNzcgMzY0IDMzUTMxNCAtMTAgMjI3IC0xMFExNjUgLTEwIDEwNyAxOVE5NSAyNyA4OCAyN1E2NiAyNyA0NSAtMTBaIiBmaWxsPSIjMmQyOTI2IiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg==" className="LogoChange" width="30" height="30" />
                </Link>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-xl-2">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to='/about'>About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/services" role="button" >
                                    Our Services
                                </Link>
                            </li>
                            
                            <li className="nav-item login-button">
                                <Link className="nav-link" to="/login">Log In/Sign Up</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}