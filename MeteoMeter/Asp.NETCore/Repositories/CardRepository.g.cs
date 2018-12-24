
using Microsoft.EntityFrameworkCore; 
using System; 
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks; 
using  MeteoMeter.Backend.Models;
using  MeteoMeter.Backend.DataModels;

namespace MeteoMeter.Backend.Repositories
{ 
    public class CardRepository : Repository<Card>, ICardRepository
    { 
		public CardRepository(ApplicationDbContext context) : base(context)
        {
        }

        public IQueryable<Card> GetAllWithReferences()
        { 
            return DbContext.Set<Card>().Include(m=>m.CreatedBy).Include(m=>m.Picture).Include(m=>m.Choices).AsNoTracking(); 
        }

		public async Task<Card> GetByIdWithReferences(int id)
        {
            return await DbContext.Set<Card>().Include(m=>m.CreatedBy).Include(m=>m.Picture).Include(m=>m.Choices).FirstOrDefaultAsync(p=>p.Id == id);
        }
    } 
}