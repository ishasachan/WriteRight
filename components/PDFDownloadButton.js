import { PDFDownloadLink, Document, Page, Text, StyleSheet } from '@react-pdf/renderer';

function PDFDownloadButton({ result }) {
    const styles = StyleSheet.create({
      page: {
        backgroundColor: 'white',
      },
      text: {
        fontSize: 16,
        marginBottom: 10,
        paddingLeft: 40,
        paddingRight: 40,
      },
      button: {
        backgroundColor: '#ff0080',
        color: 'white',
        border: '0px',
        borderRadius: '5px',
        padding: '0.5rem 1rem',
        marginLeft: '10px',
        textAlign: 'center',
        textDecoration: 'none',
        cursor: 'pointer',
      },
      coverhead: {
        textAlign: 'center',
        color: 'white',
        padding: 20,
        paddingTop: 40,
        paddingBottom: 40,
        backgroundColor: '#fe6081',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }
    });
  
    const MyDocument = () => (
      <Document>
        <Page size="A4" style={styles.page}>
          <Text style={styles.coverhead}>Cover Letter</Text>  
          <Text style={styles.text}>{result}</Text>
        </Page>
      </Document>
    );
  
    return (
      <PDFDownloadLink  document={<MyDocument />} fileName="cover_letter.pdf">
        {({ blob, url, loading, error }) =>
        <button style={styles.button}>
            {loading ? 'Loading document...' : 'Download PDF'}
        </button>
        }
      </PDFDownloadLink>
    );
  }

export default PDFDownloadButton;