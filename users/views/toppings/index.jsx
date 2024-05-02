//ON THIS PAGE I WANT IT TO SAY THIS IS THE FUN PAGE, IT WILL HAVE A TABLE SHOWING ALL EXCLUSIVE FLAVORS NOTHING 
// ELSE ON THIS PAGE WILL STAY EXCEPT FOR THE DEFAULT LAYOUT AND ADDING A TABLE WITH FLAVOR NAMES OR PICTURES?
//
const React = require('react');
const DefaultLayout = require('../layout/Default')

class Index extends React.Component {
    render() {

        return (
            <DefaultLayout title={"A little extra on top won't hurt!"}>
                <nav>
                    <a href="/flavors/new">Toppings</a>
                </nav>               
            </DefaultLayout>
        )
    }
}

module.exports = Index;