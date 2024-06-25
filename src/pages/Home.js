import Menu from "./Menu"
import { Panel, Grid, Row, Col } from "rsuite"
function Home() {
  return (
    <div style={{ display: 'flex' }}>
      <Menu />
      <div style={{ float: 'right', marginLeft: '1em' }}>
        <Grid>
          <Row>
            <Col lg={8} sm={12}>
              <Panel title="Teste 1" shaded>
                <h3>Total 1</h3>
              </Panel>
            </Col>
            <Col lg={8} sm={12}>
              <Panel title="Teste 1" shaded>
                <h3>Total 1</h3>
              </Panel>
            </Col>
            <Col lg={8} sm={12}>
              <Panel title="Teste 1" shaded>
                <h3>Total 1</h3>
              </Panel>
            </Col>
          </Row>
        </Grid>

      </div>
    </div>
  )
}
export default Home