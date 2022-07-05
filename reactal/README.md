# REACTAL package

## Modal component

To uses the component

<code>import Modal from 'reactal'</code>

then implement the element as

<code>
    const [show, setShow] = useState(false);

    <Modal  show={show} onClose={() => setShow(false)} title="my title modal">
        Children
    </Modal>
</code>


show set with hook setShow on an onClick for example. 

props.title is a string 
props.footer is string
props.children is a html element