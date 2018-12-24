
using System.Collections.Generic;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using MeteoMeter.Backend.DataModels;

namespace MeteoMeter.Backend.DataModels
{
	public  partial class Card : Identifier
	{
		public Card() : base()
		{
		}

		public DateTime PublicationDate { get; set; }


		public string Content { get; set; }


		public string Type { get; set; }


		public DateTime EndDate { get; set; }


		public int CreatedById { get; set; }


		public int PictureId { get; set; }

								public virtual UserProfile CreatedBy { get; set; }

								public virtual Picture Picture { get; set; }

		private HashSet<Choice> _Choices; 
						public HashSet<Choice> Choices { get { return _Choices ??(_Choices = new HashSet<Choice>()); }}


	}
}