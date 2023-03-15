import React from 'react';
import { useState } from 'react';
import styles from './index.module.css';
import PDFDownloadButton from '@/components/PDFDownloadButton';

const Cover = () => {
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [role, setRole] = useState('');
  const [requirements, setRequirements] = useState('');
  const [about, setAbout] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  const plainText = result.replace(/<br\s?\/?>/g, '\n');

  const copyToClipboard = () => {
    const plainText = result.replace(/<br\s?\/?>/g, '\n');
    navigator.clipboard.writeText(plainText);
    alert('Copied to clipboard!');
  };

  async function onSubmit(event) {
    event.preventDefault();
    if (loading) {
      return;
    }
    setLoading(true);
    try{
      const response = await fetch('/api/generate-cover', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, companyName, role, requirements, about }),
      });
      const data = await response.json();
      setResult(data.result.replaceAll('\n', '<br />'));
    } catch (e){
      alert("Failed to generate cover letter. Try later");
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

    return ( 
        <div id='generate-cover'>
        <main className={styles.main}>
        <h3>Cover Letter generator 🔖</h3>
        <form onSubmit={onSubmit}>

        {/* Label for Name */}
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

        <label>About You</label>
          <input
            type="text"
            name="about"
            placeholder="Enter about yourself"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />

        <label>Company Name</label>
          <input
            type="text"
            name="companyName"
            placeholder="Enter Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />

        <label>Role Applying For</label>
          <input
            type="text"
            name="role"
            placeholder="Enter Role you are applying for"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />

        <label>Company Requirements</label>
          <input
            type="text"
            name="requirements"
            placeholder="Enter Company Requirements"
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
          />

          <input type="submit" value="Generate cover letter" />
        </form>

        {loading && (
          <div>
            <h3>Generating Your Cover Letter...</h3>
            <img src="/loading.gif" className={styles.loading} />
          </div>
        )}

        {result && (
          <div className={styles.coverresult}>
              <div className={styles.coverhead}>
                <h2>Your Cover Letter</h2>
              </div>
              <div className={styles.covertext} dangerouslySetInnerHTML={{ __html: result }} />
              <div className={styles.coverbtn}>
                <button className={styles.copy} onClick={copyToClipboard}>Copy to Clipboard</button>
                <PDFDownloadButton result={plainText} />
              </div>
          </div>
        )}

      </main>
    </div>
  );
}
 
export default Cover;