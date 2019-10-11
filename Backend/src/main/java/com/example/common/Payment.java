package com.example.common;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="payment")
public class Payment extends AuditModel {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column(name="txn_type", nullable=false)
	private String txnType;
	
	@Column(name="amount", nullable=false)
	private float amount;
	
	@Column(name="remarks")
	private String remarks;
	
	@Column(name="mentor_id")
	private long mentorId;
	
	@Column(name="training_id")
	private long trainingId;
	
	@Column(name="payment_type")
	private String paymentType;
	
	/*@ManyToMany(fetch = FetchType.LAZY, mappedBy = "payment")
	List<Training> training;*/

	public long getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTxnType() {
		return txnType;
	}

	public void setTxnType(String txnType) {
		this.txnType = txnType;
	}

	public float getAmount() {
		return amount;
	}

	public void setAmount(float amount) {
		this.amount = amount;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public long getMentorId() {
		return mentorId;
	}

	public void setMentorId(long mentorId) {
		this.mentorId = mentorId;
	}

	public long getTrainingId() {
		return trainingId;
	}

	public void setTrainingId(long trainingId) {
		this.trainingId = trainingId;
	}

	public String getPaymentType() {
		return paymentType;
	}

	public void setPaymentType(String paymentType) {
		this.paymentType = paymentType;
	}

	/*public List<Training> getTraining() {
		return training;
	}

	public void setTraining(List<Training> training) {
		this.training = training;
	}
	
	
	*/
	
	
}
