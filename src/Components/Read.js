import axios from 'axios';
import React , {useState , useEffect} from 'react'
import {Table , Button} from 'semantic-ui-react'
import { API_URL } from '../Constants/URL';
import {useNavigate} from 'react-router-dom'


function Read() {


  const [apiData , setAPIData] = useState([]);
  const navigate = useNavigate();

  const updateUser = ({firstName , lastName ,checked , id}) => {
    localStorage.setItem('id' , id)
    localStorage.setItem('firstName' , firstName)
    localStorage.setItem('lastName' , lastName)
    localStorage.setItem('checked' , checked)
    navigate('/update')

  }

  const deleteUser = async (id) =>  {
    await axios.delete(`${API_URL}/${id}`)  // (API_URL +id)error handled
    callGetAPI()
  }


  const callGetAPI  = async () => {
    const resp = await axios.get(API_URL);
    setAPIData(resp.data);
  }

  
  useEffect(() => {
    callGetAPI();
  }, []);

  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>First Name</Table.HeaderCell>
          <Table.HeaderCell>Last Name</Table.HeaderCell>
          <Table.HeaderCell>checked</Table.HeaderCell>
          <Table.HeaderCell>Delete</Table.HeaderCell>
          <Table.HeaderCell>Update</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {

        apiData.map(data => (

          <Table.Row key={data.id}>
          <Table.Cell>{data.firstName}</Table.Cell>
          <Table.Cell>{data.lastName}</Table.Cell>
          <Table.Cell>{data.checked ? 'checked' : 'Notchecked'}</Table.Cell>
          <Table.Cell><button onClick={() => deleteUser(data.id)}>Delete</button></Table.Cell>
          <Table.Cell><button onClick={() => updateUser(data)}>Update</button></Table.Cell>
        </Table.Row>

        ))
      }
       

      </Table.Body>
    </Table>
  )
}

export default Read