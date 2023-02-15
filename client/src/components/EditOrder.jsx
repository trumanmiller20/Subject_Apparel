const EditOrder = () => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="issueType">Type of Issue:</label>
      <select
        id="issueType"
        onChange={handleChange}
        value={formState.issueType}
      >
        <option value="outage">Service Outage</option>
        <option value="billing">Billing</option>
        <option value="cancel">Cancel Service</option>
      </select>
      <label htmlFor="subject">Subject:</label>
      <input
        type="text"
        id="subject"
        onChange={handleChange}
        value={formState.subject}
      />
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        cols="30"
        rows="10"
        onChange={handleChange}
        value={formState.message}
      ></textarea>
      <button type="submit">Send</button>
    </form>
  )
}

export default EditOrder
